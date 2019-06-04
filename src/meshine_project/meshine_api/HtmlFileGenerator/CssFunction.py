class CssFunction:
    def __init__(self, drawing_top, drawing_left, alpha):
        self.drawing_top = drawing_top
        self.drawing_left = drawing_left
        self.alpha = alpha

    def common(self, item):

        for_dynamic_text, for_dynamic_text_letter = '', ''
        display = "none"

        if item["isStatic"]:
            display = "inherit"

        if item["isText"] and not item["isStatic"]:

            for_underline = ""
            if item["object"]["underline"]:
                for_underline = "text-decoration: underline;"

            if item["object"]["styles"]:
                for_text_color = "color: " + item["object"]["styles"]["0"]["0"]["fill"] + ";"
            else:
                for_text_color = "color: white;"

            for_dynamic_text = """
            margin: 0 !important;
            padding: 0!important;
            transform-origin: 0 0;
            opacity: {};
            text-shadow: {};
            font-family: {}px;
            font-size: {}px;
            font-weight: {};
            font-style: {};
            line-height: {};
            text-align: {};{}
            -webkit-text-stroke: {}px {};
            {}
            transform: rotate({}deg);""".format(item["object"]["opacity"],
                                                item["object"]["shadow"],
                                                item["object"]["fontFamily"],
                                                item["object"]["fontSize"],
                                                item["object"]["fontWeight"],
                                                item["object"]["fontStyle"],
                                                item["object"]["lineHeight"],
                                                item["object"]["textAlign"],
                                                for_underline,
                                                item["object"]["strokeWidth"],
                                                item["object"]["stroke"],
                                                for_text_color,
                                                item["object"]["angle"])
            for_dynamic_text_letter = """
        .letter{
            transform-origin: 0 0;
            display: inline-block;}"""

        css_text = """
        #{}{{
            top: {}px;
            left: {}px;
            z-index: {};
            display: {};
            position: inherit;{}
            }}
        {}""".format(item["id"],
                     (item["_boundingRect"]["top"] - self.drawing_top)*self.alpha,
                     (item["_boundingRect"]["left"] - self.drawing_left)*self.alpha,
                     item["zIndex"],
                     display,
                     for_dynamic_text,
                     for_dynamic_text_letter).lower()

        return css_text
