import os
from django.conf import settings
from .HtmlFunction import HtmlFunction
from .CssFunction import CssFunction
from .JsFunction import JsFunction


class HtmlFileGenerator:
    def __init__(self, data):
        self.data = data

    def create_file(self):
        print('data[0]["object"]["height"]***', self.data[0]["object"]["height"]);
        alpha = 2000 / self.data[0]["object"]["height"]
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
            # print('XXXXXXXXXXXXXXXXXXXXX ', iter_data)
            next_item = None
            if i == 1:
                is_first = True
            if i == len(self.data[1:]):
                is_last = True
            if i < len(self.data[1:]):
                next_item = my_data[i]

            css_texts = css_texts + getattr(css_function, d["animation"]["css"])(d) + "\n"
            html_texts = html_texts + getattr(html_function, d["animation"]["html"])(d).replace('None', 'none') + "\n"
            js_texts = js_texts + getattr(js_function, d["animation"]["js"])(d, is_first, is_last, next_item).replace(
                'none', 'null') + "\n"
            i = i + 1

        html_str = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BmHtmlGenerator</title>
</head>
<body>
<div id="svgContainer"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.4.3/lottie.js"></script>
<script>
    let svgContainer =  window.bodymovin.loadAnimation({
        container: document.getElementById('svgContainer'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '{}'

    });
    svgContainer.play();
    console.log(svgContainer);
</script>
</body>
</html>
                    
                    """.format(alpha, css_texts, html_texts, js_texts)
        # print('================HHIHIHIHIHI================')
        # Todo: Create user directory afterward
        with open(os.path.join(settings.MEDIA_ROOT + "/userCreations/userName/htmls", "filename.html"), "w") as file:
            file.write(html_str)
