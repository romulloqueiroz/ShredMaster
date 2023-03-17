export type ShadowType = keyof typeof shadow;

export const shadow = {
  0: null,
  1: {
    shadowColor: '#1A1C1F',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 1,
  },
  2: {
    shadowColor: '#1A1C1F',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 1,
  },
  3: {
    shadowColor: '#1A1C1F',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
  },
  4: {
    shadowColor: '#23262B',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 1,
  },
};
