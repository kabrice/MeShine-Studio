def next_animation_funct(anim_name, anim_id, anim_data):
    #print("dlekdledkl", anim_name);
    anim_name = anim_name[0].lower() + anim_name.title()[1:].replace("_", "")
    return """,
            complete:  function () {{
                {}{}({});
            }}
        """.format(anim_name, anim_id, anim_data.lower())


class JsFunction:
    def lottie(self, item, is_first, is_last, next_item):

        animation_name = "animation" + item["id"]
        animejs_name = next_item["animation"]["js"]
        animejs_name = animejs_name[0].lower() + animejs_name.title()[1:].replace("_", "")
        call_function_text = ""
        event_listener_name = ""

        if is_first:
            call_function_text = "lottie" + item["id"] + "(" + item["data"].lower() + ");"

        if not is_last:
            event_listener_name = """{}.addEventListener('complete', () => {{
                                                 {}{}({})}});""".format(animation_name,
                                                                        animejs_name,
                                                                        next_item["id"],
                                                                        next_item["data"].lower())

        js_text = """
        function lottie{0}(data) {{
            $('#'+data.id).css({{'height': data.height, 'width': data.width}});
            $('#'+data.id).show();
            let {1} = window.lottie.loadAnimation({{
                container: document.getElementById(data.id),
                renderer: 'svg',
                loop: data.loop,
                autoplay: false,
                path: data.jsonpath,
                rendererSettings: {{
                    preserveAspectRatio: 'xMidYMid slice'
                }}
            }});
            {1}.play();
            {1}.setSpeed(data.speed);
            {2}
        }}
        {3}
        """.format(item["id"], animation_name, event_listener_name, call_function_text)

        return js_text

    def animejs_popup(self, item, is_first, is_last, next_item):

        call_function_text = ""
        next_animation = ""

        if is_first:
            call_function_text = "animejsPopup" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            next_animation = next_animation_funct(next_item["animation"]["js"], next_item["id"], next_item["data"])

        js_text = """
        function animejsPopup{}(data) {{
            $('#'+data.id).show();
            anime({{
                targets: '#'+data.id+' svg g *',
                loop: data.loop,
                translateY: 1,
                duration: data.duration
                {}
            }});
        }}
        {}
        """.format(item["id"], next_animation, call_function_text)

        return js_text

    def animejs_scale(self, item, is_first, is_last, next_item):

        call_function_text = ""
        next_animation = ""

        if is_first:
            call_function_text = "animejsPopup" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            next_animation = next_animation_funct(next_item["animation"]["js"], next_item["id"], next_item["data"])

        js_text = """
        function animejsScale{}(data) {{
            $('#'+data.id).show();
            anime({{
                targets: '#'+data.id+' svg g *',
                easing: "easeOutExpo",
                loop: data.loop,
                duration: data.duration,
                scale: [0, 1]
                {}
            }});
        }}
        {}
        """.format(item["id"], next_animation, call_function_text)

        return js_text

    # Only for text
    def dominos_dreams(self, item, is_first, is_last, next_item):

        call_function_text = ""
        next_animation = ""

        if is_first:
            call_function_text = "animejsPopup" + item["id"] + "(" + item["data"] + ");"

        if not is_last:
            next_animation = next_animation_funct(next_item["animation"]["js"], next_item["id"], next_item["data"])

        js_text = """
        function dominosDreams{}(data){{
            $('#'+data.id).show();
            $('#'+data.id+' .letters'+data.id).each(function () {{
                $(this).html($(this).text().replace(/([^\s]|\w)/g, "<span class='letter'>$&</span>"));
            }});
            anime({{
                targets: '#'+data.id+' .letter',
                rotateY: [-90, 0],
                duration: data.duration,
                loop: data.loop,
                delay: function (el, i) {{
                    return 45 * i;
                }}
                {}
            }});
        }}
        {}
        """.format(item["id"], next_animation, call_function_text)

        return js_text
