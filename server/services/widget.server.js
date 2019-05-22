module.exports = function(app) {
    let widgets = [
        { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
        { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
        { _id: "345", widgetType: "IMAGE", pageId: "321", width: "50%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
        { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
        { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "50%", url:"https://www.youtube.com/embed/xa-_FIy2NgE"},           
       ]     
    // Find all widgets by given page id
    app.getrequire("/app/page/:pid/widget", (req, res)=>{
        const pid = req.params["pid"]
        const result = widgets.map(
            (widget) => {
                return widget.pageId === pid
            }
        )
        res.json(result);
    })

}