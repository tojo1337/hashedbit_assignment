import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/home/App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './routes/not-found/NotFound.tsx'
import { ShowTicket } from './routes/show-ticket/ShowTicket.tsx'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import Details from './routes/details/Details.tsx'
import BookTicket from './routes/booking/BookTicket.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/details/:movieId",
    element: <Details />
  },
  {
    path: "/book",
    element: <BookTicket />
  },
  {
    path: "/show-ticket",
    element: <ShowTicket />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
