/**
 * Sets up a click event listener on a button element to either open a SIP protocol handler or
 * update the location hash based on the value of `isMacroEnabled`, indicating delegation to the
 * on-device macro.
 *
 * @param {HTMLButtonElement} button The button element to add the event listener to.
 * @param {string} destination The destination number to call.
 * @param {boolean} isMacroEnabled Flag indicating whether macro functionality is enabled.
 */
export function dialer(button, destination, isMacroEnabled) {
  /**
   * Opens a SIP protocol with the specified destination.
   * The device's protocol handler (part of the OS), will take over and dial the destination.
   * The user will see an additional prompt.
   *
   * @param {string} destination The destination to open the SIP handler with.
   */
  function openSipHandler(destination) {
    window.location = 'sip:' + destination;
  }

  /**
   * Temporarily set the location hash to the specified destination and then unset it.
   * The complementary on-device macro, will pick up such temporary change and dial the destination.
   * The user will not see any additional prompt.
   *
   * @param {string} destination The destination location hash to set.
   */
  function toggleLocationHash(destination) {
    window.location.hash = destination;
    history.replaceState(null, '', ' ');
  }

  return (() =>
    button.addEventListener('click', () =>
      isMacroEnabled ? toggleLocationHash(destination) : openSipHandler(destination)
    ))();
}
