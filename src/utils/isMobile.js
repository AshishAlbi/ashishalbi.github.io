export function isMobileDevice(){
    if (
      RegExp(/Android/i).exec(navigator.userAgent) ||
      RegExp(/webOS/i).exec(navigator.userAgent) ||
      RegExp(/iPhone/i).exec(navigator.userAgent) ||
      RegExp(/iPad/i).exec(navigator.userAgent) ||
      RegExp(/iPod/i).exec(navigator.userAgent) ||
      RegExp(/BlackBerry/i).exec(navigator.userAgent) ||
      RegExp(/Windows Phone/i).exec(navigator.userAgent) ||
      navigator.maxTouchPoints > 2
    ) {
      return true;
    } else {
      return false;
    }
  }