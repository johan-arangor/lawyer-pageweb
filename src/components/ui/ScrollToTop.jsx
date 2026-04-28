import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // If we have an area parameter, we might want to handle it differently 
    // but the default behavior for most routes should be scrolling to top.
    const params = new URLSearchParams(search)
    if (params.get('area')) {
        // We let the Contact page handle its own scrolling if there's an area param
        return;
    }
    
    window.scrollTo(0, 0)
  }, [pathname, search])

  return null
}
