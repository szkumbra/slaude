const config = {
    TOKEN: "xoxc-5305092585425-5294944950932-5332527841443-d0151eb07ebeb54de15d3ff83732426f3b4a569b754bde8b1efc65faa4a46b31",
    COOKIE: "xoxd-HTeaULw0ovpJv%2Buh9fCzUrc0vUueR9ptQBdPVTtTuBVJ1zXWzV%2B4Do%2BP7C%2Bb3tDvyHjrcZkR2DCwCAoYQTunFNQid3N%2BDy0J88bkgahItFu67QtUp%2BOcmfARLuDZH136kmqgejgRcL8wwL1y5Vq8XDvwFOwGcMnJ5N%2F64bUP%2BwywY1zuuXwBbucP7w%3D%3D",
    TEAM_ID: "w1684501825-rtq663739",
    CHANNEL: "C058DQW8F9C",
    CLAUDE_USER: "U058NU3J4Q4",

    MAINPROMPT_LAST: true, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:#后续内容如下",

    PORT: 5004
}

export default config;
