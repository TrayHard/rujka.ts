import config from '../../config';
const { COMMAND_PREFIX, COOLDOWN_SECONDS } = config;

export default {
  error: "Error",
  mapPoolNotFound: "Map pool with this name has not been found!",
  commandNotFound: "Command is not found!",
  picked: "Picked",
  banned: "Banned",
  neutral: "Neutral",
  inPool: "Available",
  helpCommands: "Help commands",
  tryHelp: `Try using the ${COMMAND_PREFIX}help command.`,
  tooFast: `Too fast! Only **1** command each **${COOLDOWN_SECONDS}** seconds.`,
}