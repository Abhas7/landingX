function Users() {
  try {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [filteredUsers, setFilteredUsers] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const userTrieRef = React.useRef(null);
    const sectionRef = React.useRef(null);
    const isVisible = useLazyLoad(sectionRef);
    
    React.useEffect(() => {
      if (isVisible) {
        // Instead of fetching from API, we'll use our Indian user data
        loadIndianUsers();
      }
    }, [isVisible]);
    
    const loadIndianUsers = () => {
      try {
        setLoading(true);
        
        // Predefined Indian user data
        const indianUsers = [
          {
            id: 1,
            name: "Rajesh Kumar",
            username: "rajeshk",
            email: "rajesh.kumar@gmail.com",
            phone: "+91 98765 43210",
            website: "rajeshkumar.in",
            company: {
              name: "Tech Solutions India"
            },
            address: {
              city: "Mumbai",
              zipcode: "400001"
            }
          },
          {
            id: 2,
            name: "Priya Sharma",
            username: "priyas",
            email: "priya.sharma@gmail.com",
            phone: "+91 87654 32109",
            website: "priyasharma.in",
            company: {
              name: "Digital Marketing Pro"
            },
            address: {
              city: "Delhi",
              zipcode: "110001"
            }
          },
          {
            id: 3,
            name: "Amit Patel",
            username: "amitp",
            email: "amit.patel@outlook.com",
            phone: "+91 76543 21098",
            website: "amitpatel.co.in",
            company: {
              name: "Web Developers India"
            },
            address: {
              city: "Ahmedabad",
              zipcode: "380001"
            }
          },
          {
            id: 4,
            name: "Sunita Verma",
            username: "sunitav",
            email: "sunita.verma@yahoo.com",
            phone: "+91 65432 10987",
            website: "sunitaverma.in",
            company: {
              name: "Creative Designs"
            },
            address: {
              city: "Bangalore",
              zipcode: "560001"
            }
          },
          {
            id: 5,
            name: "Vikram Singh",
            username: "vikrams",
            email: "vikram.singh@gmail.com",
            phone: "+91 54321 09876",
            website: "vikramsingh.co.in",
            company: {
              name: "Cloud Services India"
            },
            address: {
              city: "Hyderabad",
              zipcode: "500001"
            }
          },
          {
            id: 6,
            name: "Neha Gupta",
            username: "nehag",
            email: "neha.gupta@outlook.com",
            phone: "+91 43210 98765",
            website: "nehagupta.in",
            company: {
              name: "Analytics Solutions"
            },
            address: {
              city: "Chennai",
              zipcode: "600001"
            }
          },
          {
            id: 7,
            name: "Ravi Desai",
            username: "ravid",
            email: "ravi.desai@gmail.com",
            phone: "+91 32109 87654",
            website: "ravidesai.co.in",
            company: {
              name: "Mobile App Developers"
            },
            address: {
              city: "Pune",
              zipcode: "411001"
            }
          },
          {
            id: 8,
            name: "Ananya Reddy",
            username: "ananyar",
            email: "ananya.reddy@yahoo.com",
            phone: "+91 21098 76543",
            website: "ananyareddy.in",
            company: {
              name: "E-commerce Solutions"
            },
            address: {
              city: "Kolkata",
              zipcode: "700001"
            }
          },
          {
            id: 9,
            name: "Karthik Iyer",
            username: "karthiki",
            email: "karthik.iyer@outlook.com",
            phone: "+91 10987 65432",
            website: "karthikiyer.co.in",
            company: {
              name: "AI Research Labs"
            },
            address: {
              city: "Jaipur",
              zipcode: "302001"
            }
          },
          {
            id: 10,
            name: "Meera Nair",
            username: "meeran",
            email: "meera.nair@gmail.com",
            phone: "+91 09876 54321",
            website: "meeranair.in",
            company: {
              name: "Content Creators"
            },
            address: {
              city: "Kochi",
              zipcode: "682001"
            }
          }
        ];
        
        setUsers(indianUsers);
        setFilteredUsers(indianUsers);
        
        // Initialize Trie with user data
        const trie = new Trie();
        indianUsers.forEach(user => {
          trie.insert(user.name, user);
          trie.insert(user.username, user);
          trie.insert(user.email.split('@')[0], user);
        });
        userTrieRef.current = trie;
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading users:', err);
        setError('Failed to load users. Please try again later.');
        setLoading(false);
      }
    };
    
    const handleSearch = (searchValue) => {
      setSearchTerm(searchValue);
      
      if (!searchValue.trim()) {
        setFilteredUsers(users);
        return;
      }
      
      if (userTrieRef.current) {
        const results = userTrieRef.current.search(searchValue);
        // Remove duplicates (same user might be found by name, username, etc.)
        const uniqueResults = Array.from(new Map(results.map(user => [user.id, user])).values());
        setFilteredUsers(uniqueResults);
      }
    };
    
    return (
      <section data-name="users-section" id="users" className="section users-section" ref={sectionRef}>
        <div data-name="users-container" className="container mx-auto px-4">
          <h2 data-name="users-title" className="section-title">Our Users</h2>
          <p data-name="users-subtitle" className="section-subtitle">
            Meet our amazing users from across India who trust our services.
          </p>
          
          <UserSearch searchTerm={searchTerm} onSearch={handleSearch} />
          
          {loading ? (
            <div data-name="loading-container" className="loading-spinner">
              <i className="fas fa-spinner"></i>
            </div>
          ) : error ? (
            <div data-name="error-container" className="text-center text-red-500 py-10">
              <i className="fas fa-exclamation-circle text-3xl mb-4"></i>
              <p data-name="error-message">{error}</p>
              <button 
                data-name="retry-button"
                onClick={loadIndianUsers} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredUsers.length > 0 ? (
            <div data-name="users-grid" className="users-grid">
              {filteredUsers.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          ) : (
            <div data-name="no-results" className="no-results">
              <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <p>No users found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Users component error:', error);
    reportError(error);
    return null;
  }
}
