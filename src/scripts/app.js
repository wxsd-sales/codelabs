import '../styles/app.scss';
import { dialer } from './dialer';

const FALLBACK_BACKGROUND_BRIGHTNESS = '55';
const FALLBACK_BACKGROUND_POSTER = import.meta.env.BASE_URL + 'images/cisco-impact-background.jpg';
const FALLBACK_BRAND_LOGO = import.meta.env.BASE_URL + 'images/webex-logo-white.svg';
const FALLBACK_DESTINATION = '111111';
const FALLBACK_HELP_BUTTON_TEXT = 'Help';
const FALLBACK_SUBTITLE = 'Tap the button below to connect with a live agent';

document.addEventListener('DOMContentLoaded', function () {
  const searchParams = new URL(window.location.href).searchParams;

  const backgroundBrightness =
    searchParams.get('backgroundBrightness') ?? FALLBACK_BACKGROUND_BRIGHTNESS;
  const backgroundPoster = searchParams.get('backgroundPoster') ?? FALLBACK_BACKGROUND_POSTER;
  const brandLogo = searchParams.get('brandLogo') ?? FALLBACK_BRAND_LOGO;
  const destination = searchParams.get('destination') ?? FALLBACK_DESTINATION;
  const helpButtonText = searchParams.get('helpButtonText') ?? FALLBACK_HELP_BUTTON_TEXT;
  const subtitle = searchParams.get('subtitle') ?? FALLBACK_SUBTITLE;
  const isMacroEnabled = searchParams.get('isMacroEnabled')?.toLowerCase() === 'true';

  document.getElementById('brand-background').style.filter = `brightness(${backgroundBrightness}%)`;
  document.getElementById('brand-background').src = backgroundPoster;
  document.getElementById('brand-logo').src = brandLogo;
  document.getElementById('help-button-text').innerText = helpButtonText;
  document.getElementById('subtitle').innerText = subtitle;

  dialer(document.getElementById('help-button'), destination, isMacroEnabled);
});
