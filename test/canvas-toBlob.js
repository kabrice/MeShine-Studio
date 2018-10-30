$(document).ready(function() {

    var canvas 	= new fabric.Canvas("canvas", { preserveObjectStacking: true });

// create rectangle
    var rect = new fabric.Rect({
        left: 50,
        top: 50,
        width: 300,
        height: 100,
        fill: '#ff0000'
    });

// create circle
    var text = new fabric.Text("Align Me next", {
        left: 190,
        top: 320,
        fontSize: 20
    });

// create text
    var text2 = new fabric.Text("Align me first", {
        left: 100,
        top: 200,
        fontSize: 20
    });

    canvas.add(rect, text, text2);
    canvas.renderAll();

// GROUP ON SELECTION
    canvas.on("selection:created", function(e) {
        var activeObj = canvas.getActiveGroup();
        if(activeObj.type === "group") {
            console.log("Group created");

            var groupWidth = e.target.getWidth();
            var groupHeight = e.target.getHeight();


            e.target.forEachObject(function(obj) {
                var itemWidth = obj.getBoundingRect().width;
                var itemHeight = obj.getBoundingRect().height;

                // ================================
                // OBJECT ALIGNMENT: " H-LEFT "
                // ================================
                $('#objAlignLeft').click(function() {
                    obj.set({
                        left: -(groupWidth / 2),
                        originX: 'left'
                    });
                    obj.setCoords();
                    canvas.renderAll();
                });
                // ================================
                // OBJECT ALIGNMENT: " H-CENTER "
                // ================================
                $('#objAlignCenter').click(function() {
                    obj.set({
                        left: (0 - itemWidth/2),
                        originX: 'left'
                    });
                    obj.setCoords();
                    canvas.renderAll();
                });
                // ================================
                // OBJECT ALIGNMENT: " H-RIGHT "
                // ================================
                $('#objAlignRight').click(function() {
                    obj.set({
                        left: (groupWidth/2 - itemWidth/2),
                        originX: 'center'
                    });
                    obj.setCoords();
                    canvas.renderAll();
                });

            });

        }
    }); // END OF " SELECTION:CREATED "

    canvas.on("selection:cleared", function(e) {
        $('#objAlignLeft').off('click');
        $('#objAlignCenter').off('click');
        $('#objAlignRight').off('click');
    });

});