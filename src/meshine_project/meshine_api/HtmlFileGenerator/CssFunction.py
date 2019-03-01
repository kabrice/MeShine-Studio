class CssFunction:
    def __init__(self, drawing_top, drawing_left):
        self.drawing_top = drawing_top
        self.drawing_left = drawing_left

    def common(self, item):
        for_dynamic_text = "f"
        for_dynamic_text_letter = "f"
        display = """none"""
        if item["isStatic"]:
            display = """inherit"""

        if item["isText"] and not item["isStatic"]:

            for_underline = ""
            if item["object"]["underline"]:
                for_underline = "text-decoration: underline;"

            for_text_color = ""
            if item["object"]["styles"]:
                for_text_color = "color: " + item["object"]["styles"]["0"]["0"]["fill"] + ";"

            for_dynamic_text =("""
            margin: 0 !important
            padding: 0!important;
            transform-origin: 0 0;
            opacity: """ + item["object"]["opacity"] + """;
            text-shadow: """ + item["object"]["shadow"] + """;
            font-size: """ + item["object"]["fontSize"] + """;
            font-weight: """ + item["object"]["fontWeight"] + """;
            font-style: """ + item["object"]["fontStyle"] + """;
            line-height: """ + item["object"]["lineHeight"] + """;
            text-align: """ + item["object"]["textAlign"] + """;
            """ + for_underline + """
            -webkit-text-stroke: """ + item["object"]["strokeWidth"] + """px """ + item["object"]["stroke"] + """;
            """ + for_text_color + """
            transform: rotate(""" + item["object"]["angle"] + """deg);
            """)
            for_dynamic_text_letter = """
                .letters""" + item["id"] + """{
                    transform-origin: 0 0;
                    display: inline-block;
                }
            """
        print("""ssssssss""", for_dynamic_text_letter)
        css_text = """
        #""" + item["id"] + """{
            top: """ + item["_boundingRect"]["top"] - self.drawing_top + """px;
            left: """ + item["_boundingRect"]["left"] - self.drawing_left + """px;
            z-index: """ + item["zIndex"] + """;
            display: """ + display + """";
            position: inherit;
            """ + {for_dynamic_text} + """
        }
        """ + {for_dynamic_text_letter}

        return css_text
