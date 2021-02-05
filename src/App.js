import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import studentDetails from './containers/student-details'
import NotFound from './components/not-found'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
import AddStudent from './containers/add-student'
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div className="conatainer">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/add-student" component = {AddStudent}/>
                                <Route path="/students/:id" component={studentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App
