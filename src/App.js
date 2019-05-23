import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Users
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Register from "./components/user/Register";
// Websites
import WebsiteList from './components/website/WebsiteList';
import WebsiteNew from './components/website/WebsiteNew';
import WebsiteEdit from './components/website/WebsiteEdit';
//Pages
import PageList from './components/page/PageList';
import PageNew from './components/page/PageNew';
import PageEdit from './components/page/PageEdit';
// Widgets
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";

class App extends Component {

    state = {
       pages: [
            {_id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
            {_id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
            {_id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
       ],
       widgets: [
           { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
           { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
           { _id: "345", widgetType: "IMAGE", pageId: "321", width: "50%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
           { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
           { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "50%", url:"https://www.youtube.com/embed/xa-_FIy2NgE"},           
        ]    
         
    }
           
    editWidget = newWidget => {
        const newWidgets = this.state.widgets.map(
            (widget) => {
                if(widget._id === newWidget._id) {
                    widget = newWidget
                }
                return widget;
            }
        )

        this.state({
            widgets: newWidgets
        })
    }
    addWidget = newWidget => {
        const newWidgets = this.state.Widgets;
        newWidgets.push(newWidget);
        this.setState({
            widgets: newWidgets
        });
    }

    deleteWidget = (wgid) => {
        const newWidgets = this.state.widgets.filter(
            (widget) => (
                widget._id !==wgid
            )
    )
    this.setState({
        widgets: newWidgets
    })
}

    render() { 

            return (
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />  
                        <Route exact path="/register" component ={Register} />
                        <Route exact path="/user/:uid" component={Profile} />
                        <Route exact path="/user/:uid/website" component={WebsiteList}  /> 
                        <Route exact path="/user/:uid/website/new" component={WebsiteNew} />
                        <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit} />
                        <Route exact path= "/user/:uid/website/:wid/page" component={PageList} />
                        <Route exact path= "/user/:uid/website/:wid/page/new" component={PageNew}  />
                        <Route exact path= "/user/:uid/website/:wid/page/:pid" component={PageEdit} />
                        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget" component={WidgetList} />
                        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/new" component={WidgetChooser} />
                        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/wgid" component={WidgetEdit} />                                                                   
                    </Switch>
            </Router>       
        );
    }
}
                    
export default App;
