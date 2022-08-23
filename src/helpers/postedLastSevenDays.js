export default function timeSince(date) {
    const date1 = new Date(date);
    const date2 = new Date();
    const seconds = Math.floor((date2.getTime() - date1.getTime()) / 1000);
  
    const interval = seconds / 86400;
    
    if (interval > 7) {
      return false
    }
    return true
    
  }