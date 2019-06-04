
from .HtmlFunction import HtmlFunction
from .CssFunction import CssFunction
from .JsFunction import JsFunction

class HtmlFileGenerator:
    def __init__(self, data):
        self.data = data

    def create_file(self):
        alpha = 2000/self.data[0]["object"]["height"]
        css_texts, html_texts, js_texts = "", "", ""
        css_function = CssFunction(self.data[0]["_boundingRect"]["top"],
                                   self.data[0]["_boundingRect"]["left"],
                                   alpha)
        html_function = HtmlFunction()
        js_function = JsFunction()

        i = 1
        my_data = self.data[1:]
        for d in my_data:
            is_first, is_last = False, False
            #print('XXXXXXXXXXXXXXXXXXXXX ', iter_data)
            next_item = None
            if i == 1:
                is_first = True
            if i == len(self.data[1:]):
                is_last = True
            if i < len(self.data[1:]):
                next_item = my_data[i]

            css_texts = css_texts + getattr(css_function, d["animation"]["css"])(d)+"\n"
            html_texts = html_texts + getattr(html_function, d["animation"]["html"])(d).replace('None', 'none')+"\n"
            js_texts = js_texts + getattr(js_function, d["animation"]["js"])(d, is_first, is_last, next_item).replace('none', 'null')+"\n"
            i = i+1

        html_str = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #play-container {{
            height: 2000px;
            width: 1124px;
            background: gray;
            position: relative;
            margin: auto;
            overflow: hidden;
        }}
        .svg-arrg {{
            overflow: auto !important;
            margin: 0px auto !important;
            outline: inherit !important;
            position: absolute !important;
            transform-origin: 0 0 !important;
            transform: scale({}) !important;
        }}{}
    </style>
</head>
<body style="background: #000; vertical-align:middle;
        display:table-cell; padding: 0;">

<div id="play-container">
    {}
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.4.3/lottie.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script>
window.onload = function() {{
    {}
}}
</script>
</body>
</html>
                    """.format(alpha, css_texts, html_texts, js_texts)
        #print('================HHIHIHIHIHI================')
        #Todo: Create user directory afterward
        with open("userCreations/userName/htmls/filename.html", "w") as file:
            file.write(html_str)