import config from '../../config';
import { declOfNum } from '../../utils';
const { COMMAND_PREFIX, COOLDOWN_SECONDS } = config;

export default {
  error: "Ошибка",
  mapPoolNotFound: "Пулла карт с таким именем не найдено!",
  commandNotFound: "Команда не найдена!",
  picked: "Пикнута",
  banned: "Забанена",
  neutral: "Выбрана как нейтральная",
  inPool: "Доступна для пика",
  helpCommands: "Помощь по командам",
  tryHelp: `Воспользуйтесь командой ${COMMAND_PREFIX}help для помощи.`,
  tooFast: `Слишком быстро! Не более **1** команды за **${COOLDOWN_SECONDS}** ${declOfNum(COOLDOWN_SECONDS, ['секунду', 'секунды', 'секунд'])}.`,
}
