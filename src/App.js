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
        websites: [
          { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
          { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
          { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
          { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
          { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
          { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
          { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
          ],
        pages: [
            { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
         ],
         widgets: [
          { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
          { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
          { _id: "345", widgetType: "IMAGE", pageId: "321", width: "50%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
          { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
          { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "50%", url:"https://www.youtube.com/embed/xa-_FIy2NgE"},           
         ]    
        
    }


    addWeb = (newWeb) => {
        const newWebs = this.StaticRange.websites;
        newWebs.push(newWeb);
        this.setState({
            websites: newWebs
        });
    }

    deleteWeb = (wid) => {
        this.setState({
            websites: this.state.websites.filter(
                (website) => website._id !== wid
            )
        })
    }

    editWeb = (wid, name, description) => {
        this.setState({
            websites: this.state.websites.map(
                (website) => {
                    if(wid === website._id){
                        website.name = name;
                        website.description = description
                    }
                    return website;
                }
            )
        })
    }

    addPage= newPage => {
        const newPages = this.state.pages;
        newPages.push(newPage);
        this.setState({
            pages: newPages
        });
    }

    editPage = newPage => {
        const newPages = this.state.map(
            (page) => {
                if(page._id === newPage._id) {
                    page = newPage
                }
                return page;
            } 
        )  
        this.setState({
            pages: newPages
        })      
    }

    deletePage = pid => {
        const newPages = this.state.pages.filter(
            (page) => (
                page._id !==pid
            )
        )
        this.setState({
            pages: newPages
        })
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
                        <Route exact path="/user/:uid/website" render={ props => (<WebsiteList {...props} websites={this.state.websites}/>)} /> 
                        <Route exact path="/user/:uid/website/new" render={ props => (<WebsiteNew {...props} websites={this.state.websites}/>)} /> 
                        <Route exact path="/user/:uid/website/edit" render={ props => (<WebsiteEdit {...props} websites={this.state.websites} deleteWeb={this.deleteWeb} editWeb={this.editWeb}/>)} />
                        <Route exact path= "/user/:uid/website/:wid/pageList" render={props =>(<PageList {...props} pages={this.state.pages}/>)} />
                        <Route exact path= "/user/:uid/website/:wid/pageNew" render={props =>(<PageNew {...props} pages={this.state.pages} addPage={this.addPage}/>)} />
                        <Route exact path= "/user/:uid/website/:wid/pageEdit" render={props =>(<PageEdit {...props} pages={this.state.pages} editPage={this.editPage} deletePage={this.deletePage} />)} />
                        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget"render={props =>(<WidgetList {...props} widget={this.state.widgets} />)} />
                        <Route exact path= "/user/:uid/website/:wid/page/:pid/widget/new" render={props =>(<WidgetChooser {...props} addwidget={this.addWidget} />)} />
                        <Route exact path= "/user/:uid/website/:wid/pag/:pid/widget"render={props =>(<WidgetEdit {...props} widget={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} />)} />                                                                   
                    </Switch>
            </Router>       
        );
    }
}
                    
export default App;
