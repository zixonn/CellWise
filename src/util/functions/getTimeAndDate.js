function getDate() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2); 
  
    return `${month}/${day}/${year}`;
  }

function getTime() {
    const date = new Date();
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
  
export {getDate, getTime}
  