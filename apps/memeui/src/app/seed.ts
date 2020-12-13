export const SEED_WELCOME_TEXTS: string[] = [
  'Welcome to shit show',
  'Hello darkness',
  'Hello',
  'Welcome',
  'Hey there',
  'Yo',
  "Take a seat"
];

export const getRandomWelcomeQuery = () => {
  return SEED_WELCOME_TEXTS[
    Math.floor(Math.random() * SEED_WELCOME_TEXTS.length)
  ];
};
