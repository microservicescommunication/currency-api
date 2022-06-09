import { Route } from '@athenna/http'

/*
|--------------------------------------------------------------------------
| Http Routes
|--------------------------------------------------------------------------
|
| Here is where you can register http routes for your application. These
| routes are loaded by the HttpRouteProvider.
|
*/

Route.group(() => {
  Route.get('/', 'WelcomeController.show')

  Route.group(() => {}).prefix('/api/v1')
})
