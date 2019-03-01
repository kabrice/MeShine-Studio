class JsFunction:

    def lottie(self, item, is_first, is_last, next_item):

        animation_name = "animation" + item["id"]
        call_function_text = ""
        event_listener_name = ""

        if is_first:
            call_function_text = "lottie" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            event_listener_name = animation_name + ".addEventListener('complete', () => {" + " \
                                                 " + next_item["animation"]["js"] + next_item["id"] + \
                                  "(" + next_item["data"] + ")});"

        js_text = """
        function lottie""" + item["id"] + """(data) {

            $('#'+data.id).show();
            let animationDonaldkim = window.lottie.loadAnimation({
                container: document.getElementById(data.id),
                renderer: 'svg',
                loop: data.loop,
                autoplay: false,
                path: data.jsonPath,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
            animationDonaldkim.play();
            animationDonaldkim.setSpeed(data.speed);
            """ + event_listener_name + """
        }
        """ + call_function_text

        return js_text

    def animejs_popup(self, item, is_first, is_last, next_item):

        call_function_text = ""
        next_animation = ""

        if is_first:
            call_function_text = "animeJsPopup" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            next_animation = """,
                complete:  function () {
                    """ + next_item["animation"]["js"] + next_item["id"] + """(""" + next_item["data"] + """ );
                }
            """

        js_text = """
        function animeJsPopup""" + item["id"] + """(data) {
            $('#'+data.id).show();
            anime({
                targets: '#'+data.id+' svg g *',
                loop: data.loop,
                translateY: 1,
                duration: data.duration
                """ + next_animation + """
            });
        }
        """ + call_function_text

        return js_text

    def animejs_scale(self, item, is_first, is_last, next_item):

        call_function_text = ""
        next_animation = ""

        if is_first:
            call_function_text = "animeJsPopup" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            next_animation = """,
                complete:  function () {
                    """ + next_item["animation"]["js"] + next_item["id"] + """(""" + next_item["data"] + """ );
                }
            """

        js_text = """
        function scaleWhiteRect""" + item["id"] + """(data) {
            $('#'+data.id).show();
            anime({
                targets: '#'+data.id+' svg g *',
                easing: "easeOutExpo",
                loop: data.loop,
                duration: data.duration,
                scale: [0, 1]
                """ + next_animation + """
            });
        }
        """ + call_function_text

        return js_text
    # Only for text
    def dominos_dreams(self, item, is_first, is_last, next_item):

        call_function_text = ""
        next_animation = ""

        if is_first:
            call_function_text = "animeJsPopup" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            next_animation = """,
                complete:  function () {
                    """ + next_item["animation"]["js"] + next_item["id"] + """(""" + next_item["data"] + """ );
                }
            """

        js_text = """
        function dominosDreams""" + item["id"] + """(data){
            $('#'+data.id).show();
            $('#'+data.id+' .letters'+data.id).each(function () {
                $(this).html($(this).text().replace(/([^\s]|\w)/g, "<span class='letter'>$&</span>"));
            });
            anime({
                targets: '#'+data.id+' .letter',
                rotateY: [-90, 0],
                duration: data.duration,
                loop: data.loop,
                delay: function (el, i) {
                    return 45 * i;
                },
                """ + next_animation + """
            });
        }
        """ + call_function_text

        return js_text
