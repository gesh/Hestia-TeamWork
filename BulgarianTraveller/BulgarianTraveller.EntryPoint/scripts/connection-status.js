function checkConnnection(connectionType){
  if (connectionType == Connection.NONE || connectionType == Connection.UNKNOWN) {
  		return false;
  }

  return true;
};