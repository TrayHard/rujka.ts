export default {
  error: "Ошибка",
  mapPoolNotFound: "Пулла карт с таким именем не найдено!",
  commandNotFound: "Команда не найдена!",
  picked: "Пикнута",
  banned: "Забанена",
  neutral: "Выбрана как нейтральная",
  inPool: "Доступна для пика",
  tryHelp: (prefix: string) => `Воспользуйтесь командой ${prefix}help для помощи.`,
  tooFast: (cooldown: string) => `Too fast! Only **1** command each **${cooldown}** seconds.`,
}