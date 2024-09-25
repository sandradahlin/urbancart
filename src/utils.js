/**
 * Parses JWT token
 * @param {string} token 
 * @returns parsed token
 */
export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

/**
 * Cookie utilities
 */
const COOKIE_REMOVE_DATE = "Thu, 01 Jan 1970 00:00:00 GMT";

/**
 * Creates cookie
 * @param {string} key 
 * @param {string} value 
 * @param {string} expiry 
 * @returns cookie item
 */
export const createCookie = (key, value, expiry) => {
  if (!key || /^(?:expires|max.age|path|domain|secure)$/i.test(key)) {
    return "";
  }
  const expires = `; Expires=${expiry.toUTCString()}`;
  let cookieItem = "";
  cookieItem += `${encodeURIComponent(key)}=`;
  cookieItem += encodeURIComponent(value);
  cookieItem += expires;

  return cookieItem;
};

/**
 * Sets old expiry date on a current cookie
 * @param {string} key 
 * @returns cookiItem
 */
export const createRemoveCookie = (key) => {
  let cookieItem = "";
  cookieItem += `${encodeURIComponent(key)}=`;
  cookieItem += `; Expires=${COOKIE_REMOVE_DATE}`;

  return cookieItem;
};

/**
 * Gets a cookie
 * @param {string} sourceCookie 
 * @param {string} key 
 * @returns cookie item
 */
export const getCookie = (sourceCookie, key) => {
  const items = {};
  const cookies = sourceCookie.split(";");
  cookies.forEach((cookie) => {
    const [key, value] = cookie.split("=").map((item) => item.trim());
    items[key] = decodeURIComponent(value);
  });

  return items[key];
};

/**
 * Theme toggle
 */
/**
 * @param {string} initialTheme - initial theme.
 * @returns {string} - defaults to initial theme or returns theme set on local storage.
 */
export const getStorageTheme = (initialTheme) => {
  let theme = initialTheme;
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
