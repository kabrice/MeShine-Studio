class HtmlFunction:

    @staticmethod
    def common(item):
        #Todo: Manage the animation case
        html_text = """
        <div id='{}' class='svg-arrg'>
            {}
        </div>
        """.format(item["id"], item["svg"])

        if item["animation"]["js"] == 'lottie':
            html_text = "<div id='" + item["id"] + "'></div>"

        elif item["isText"] and not item["isStatic"]:
            text_in = ""
            for t in item["object"]["text"].split('\n'):
                text_in = text_in + '<p class="letters' + item["id"] + '" style="margin:1px;padding: 1px;">' +t+'</p> '
            html_text = """
                <div id="{}" class="svg-arrg">
                    {}
                </div>
            """.format(item["id"], text_in)

        return html_text
