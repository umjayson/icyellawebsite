/* =========================================================
   SITE CONFIG
   This is the ONLY file you need to touch when your Discord
   server gets deleted/changed. Update INVITE_URL below,
   re-upload this one file, and the homepage will redirect
   everyone automatically.
   ========================================================= */

const SITE_CONFIG = {
  // Set to true to show the "server was deleted, redirecting..." banner.
  // Set to false if the original server/invite is still active (no redirect needed).
  SERVER_DELETED: false,

  // Current/new Discord invite link. Always keep this up to date.
  INVITE_URL: "https://discord.gg/your-invite-code",

  // Seconds to wait before auto-redirecting (only used when SERVER_DELETED is true).
  REDIRECT_DELAY: 6,
};
