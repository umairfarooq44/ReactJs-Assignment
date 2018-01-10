# ReactJS Assignment

## Steps for the completion of tasks
- First I made dumb components with two routes `/` and `user/:login` with contained dummy list of data with ids.Through routing when clicked on one list item user detail page was opened with dummy login.
- Then I integrated redux which at that time only contained only id which was updated on the route change.
- Then I hit the api which was at that executing from componentDidMount function of the component and saving data of api call in the store.
- Then I designed the user detail page so that after clicking listItem of user, userdetail should be displayed which was getting from the store on the basis of login.
- Then I updated userDetail page so that if page is reloaded(in which case store would be empty), fetch the single user by executing api.
- Then I move the api call of home Component to the redux action.
- Then I implemented load more functionality in Home component.
- Then I wrote unit tests.