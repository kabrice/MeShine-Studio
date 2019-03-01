
#from . import CssFunction, HtmlFunction, JsFunction
from .HtmlFunction import HtmlFunction
from .CssFunction import CssFunction
from .JsFunction import JsFunction

class HtmlFileGenerator:
    def __init__(self, data):
        self.data = data

    def create_file(self):

        css_texts, html_texts, js_texts = "", "", ""
        css_function = CssFunction(self.data[0]["_boundingRect"]["top"], self.data[0]["_boundingRect"]["left"])
        html_function = HtmlFunction()
        js_function = JsFunction()

        for d in self.data[1:]:
            #z = css_function.common(d)
            #print('ddddddddddd', z)
            css_texts = css_texts + getattr(css_function, d["animation"]["css"])(d)+"\n"
            html_texts = html_texts + getattr(html_function, d["animation"]["html"])(d)+"\n"
            js_texts = js_texts + getattr(js_function, d["animation"]["js"])(d)+"\n"

        html_str = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #play-container {
            height: 2000px;
            width: 1124px;
            background: gray;
            position: relative;
            margin: auto;
            overflow: hidden;

        }
        .svg-arrg {
            overflow: auto;
            margin: 0px auto;
            outline: inherit;
            position: absolute;
            transform: transform-origin: 0 0;
        }"""+css_texts+"""
    </style>
</head>
<body style="background: #000; vertical-align:middle;
            display:table-cell; padding: 0;">

<div id="play-container">
    """+html_texts+"""
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script>
window.onload = function() {
    """+js_texts+"""
}
</script>
</body>
</html>
                    """
        #print('================HHIHIHIHIHI================')
        #Todo: Create user directory afterward
        with open("userCreations/userName/htmls/filename.html", "w") as file:
            file.write(html_str)