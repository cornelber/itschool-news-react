import { Routes, Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NewsCategory from './pages/NewsCategory'
import NewsDetails from './pages/NewsDetails'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route
					path='/category/:categoryId'
					element={<NewsCategory />}
				/>
				<Route path='/news/:newsId*' element={<NewsDetails />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	)
}

export default App
