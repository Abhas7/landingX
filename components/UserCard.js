function UserCard({ user }) {
  try {
    // Generate initials for avatar
    const getInitials = () => {
      return user.name
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    };
    
    // Generate a unique color based on user id
    const getAvatarColor = () => {
      const colors = [
        'bg-blue-100 text-blue-500',
        'bg-green-100 text-green-500',
        'bg-purple-100 text-purple-500',
        'bg-yellow-100 text-yellow-500',
        'bg-pink-100 text-pink-500',
        'bg-indigo-100 text-indigo-500'
      ];
      
      return colors[user.id % colors.length];
    };
    
    return (
      <div data-name="user-card" className="user-card">
        <div data-name="user-header" className="user-header">
          <div data-name="user-avatar" className={`user-avatar ${getAvatarColor()}`}>
            <span data-name="user-initials">{getInitials()}</span>
          </div>
          <div data-name="user-info" className="user-info">
            <h3 data-name="user-name">{user.name}</h3>
            <p data-name="user-username">@{user.username}</p>
          </div>
        </div>
        
        <div data-name="user-details" className="user-details">
          <div data-name="user-email" className="user-detail">
            <i className="fas fa-envelope"></i>
            <span>{user.email}</span>
          </div>
          <div data-name="user-phone" className="user-detail">
            <i className="fas fa-phone"></i>
            <span>{user.phone}</span>
          </div>
          <div data-name="user-website" className="user-detail">
            <i className="fas fa-globe"></i>
            <span>{user.website}</span>
          </div>
          <div data-name="user-company" className="user-detail">
            <i className="fas fa-building"></i>
            <span>{user.company.name}</span>
          </div>
          <div data-name="user-address" className="user-detail">
            <i className="fas fa-map-marker-alt"></i>
            <span>{user.address.city}, {user.address.zipcode}</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UserCard component error:', error);
    reportError(error);
    return null;
  }
}
