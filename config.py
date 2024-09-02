# Uncomment this to still load settings configured via autoconfig.yml
config.load_autoconfig(False)

# Setting default page
c.url.start_pages  = "/home/x_user/.config/qutebrowser/custom_start_page/index.html"
c.url.default_page = "/home/x_user/.config/qutebrowser/custom_start_page/index.html"

# Fonts
c.fonts.default_family   = '8.5pt "JetBrainsMono Nerd Font"'
c.fonts.completion.entry = '8.5pt "JetBrainsMono Nerd Font"'
c.fonts.debug_console    = '8.5pt "JetBrainsMono Nerd Font"'
c.fonts.prompts          = '8.5pt "JetBrainsMono Nerd Font"'
c.fonts.statusbar        = '8.5pt "JetBrainsMono Nerd Font"'

# Dark mode
c.colors.webpage.preferred_color_scheme = "dark"
c.colors.webpage.darkmode.policy.images = "smart"

# BINDINGS
config.bind(";t",       "open -t")                                                        # Open new tab
config.bind(";m",       "hint links spawn mpv --keep-open=yes {hint-url}")                # Play video via mpv
config.bind(";d",       "hint links spawn yt-dlp {hint-url} -P ~/downloads/qutebrowser")  # Download video from youtube using yt-dlp
config.bind("<Ctrl+k>", "completion-item-focus prev", mode="command")
config.bind("<Ctrl+j>", "completion-item-focus next", mode="command")


# WEBSITES PERMISSIONS
## Javascript
config.set("content.javascript.clipboard", "access", "https://chat.openai.com/*") # In order to be able to copy answers.
config.set("content.javascript.clipboard", "access", "https://github.com/*") # In order to be able to copy code...etc
config.set("content.javascript.clipboard", "access", "https://discord.com/channels/@me/*") # In order to be able to copy code...etc

# Audio capture & desktop capture
config.set("content.desktop_capture", True, "https://discord.com/*")
config.set("content.media.audio_capture", True, "https://discord.com/*")

# UI
c.scrolling.smooth = True    # Smooth scrolling for making eyes feeling better
c.statusbar.show   = "never" # Never show statusbar
c.tabs.show        = "never" # Never show tabs
c.scrolling.bar    = "never"
c.zoom.default     = "95%"
config.source("./themes/default/base16-gruvbox-material-dark-medium.config.py") # Set the theme.

## Other settings
config.set("downloads.location.directory", "~/downloads") # Change download location.


# Check that if it works
config.set("content.notifications.presenter", "libnotify")
config.set("content.notifications.enabled", True, "https://x.com/*")
