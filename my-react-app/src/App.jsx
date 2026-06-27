import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css'; // Assuming you have standard Vite CSS

function App() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from your 'venues' table
    async function fetchVenues() {
      const { data, error } = await supabase
        .from('venues')
        .select('*');

      if (error) {
        console.error("Error fetching venues:", error);
      } else {
        setVenues(data);
      }
      setLoading(false);
    }

    fetchVenues();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>SmartSpace Orchestrator 🏢</h1>
      <h2>Available Venues</h2>

      {loading ? (
        <p>Loading venues from Supabase...</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {venues.map((venue) => (
            <div key={venue.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h3>{venue.name}</h3>
              <p><strong>Location:</strong> {venue.location}</p>
              <p><strong>Capacity:</strong> {venue.capacity} people</p>
              <p><strong>Price:</strong> ₹{venue.price_per_day} / day</p>
              <p><strong>Amenities:</strong> {venue.amenities.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
