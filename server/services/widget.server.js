module.exports = function(app) {
    let widgets = 
    // Find all widgets by given page id
    app.get("/app/page/:pid/widget", (req, res)=>{
        const pid = req.params["pid"]
        const result = widgets.filter(
            (widget) => {
                return widget.pageId === pid
            }
        )
        res.json(result);
    })

    // Create new widget
    app.post("/api/widget", (req, res) => {
        const newWidget = req.body;
        widgets.push(newWidget);
        res.json(newWidget);
    })

    // Get widget by id
    app.get("/api/widget/:wgid", (req, res)=> {
        const wgid = req.params["wgid"];
        const widget = widgets.find(
            (widget) => (widget._id === wgid)
        )
        res.json(widget);
    })

    // Update Widget
    app.put("/api/widget", (req, res) => {
        const newWidget = req.body;
        widgets = widgets.map(
            (widget) => {
                if(widget._id === newWidget._id){
                    widget = newWidget

                }
                return widget;
            }
        )
        res.json(newWidget);
    })

    // Delete Widget by given id
    app.delete("/api/widget/:wgid", (req, res) => {
        const wgid = req.params["wgid"];
        const widget = widget.find(
            (widget) => (widget._id === wgid)
        );
        const index = widgets.indexOf(page);
        pageXOffset.splice(index, 1);
        res.json(widget);
    })
}