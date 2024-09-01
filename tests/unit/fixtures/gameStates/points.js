import { Card } from '../Card';
import GamePhase from '../../../../utils/GamePhase.json';
import MoveType from '../../../../utils/MoveType.json';
import GameStatus from '../../../../utils/GameStatus.json';
import { gameFixture } from '../Game';

const gameStateRow = {
  p0Hand: ['AS'],
  p0Points: ['TS', '8D(JS-p0,JC-p1)'],
  p0FaceCards: ['KS'],
  p1Hand: ['AH', 'AD'],
  p1Points: ['TH', 'AC'],
  p1FaceCards: [],
  deck: ['7S', '7C', 'KH'],
  scrap: ['6C'],
  twos: [],
  discardedCards: [],
  playedCard: 'TS',
  oneOff: null,
  oneOffTarget: null,
  resolved: null,
  gameId: 1,
  playedBy: 0,
  moveType: MoveType.POINTS,
  turn: 3,
  phase: GamePhase.MAIN,
  targetCard: null,
};

export const points = {
  gameState: {
    p0: {
      hand: [Card.ACE_OF_SPADES],
      points: [
        Card.TEN_OF_SPADES,
        {
          ...Card.EIGHT_OF_DIAMONDS,
          attachments: [Card.JACK_OF_SPADES, Card.JACK_OF_CLUBS],
        },
      ],
      faceCards: [Card.KING_OF_SPADES],
    },
    p1: {
      hand: [Card.ACE_OF_HEARTS, Card.ACE_OF_DIAMONDS],
      points: [Card.TEN_OF_HEARTS, Card.ACE_OF_CLUBS],
      faceCards: [],
    },
    deck: [Card.SEVEN_OF_SPADES, Card.SEVEN_OF_CLUBS, Card.KING_OF_HEARTS],
    scrap: [Card.SIX_OF_CLUBS],
    twos: [],
    discardedCards: [],
    oneOff: null,
    oneOffTarget: null,
    resolved: null,
    playedCard: Card.TEN_OF_SPADES,
    gameId: 1,
    playedBy: 0,
    moveType: MoveType.POINTS,
    turn: 3,
    phase: GamePhase.MAIN,
    targetCard: null,
  },

  gameStateRow: gameStateRow,

  game: {
    ...gameFixture,
    gameStates: [gameStateRow],
    status: GameStatus.FINISHED,
  },

  socket: {
    change: MoveType.POINTS,
    happened: true,
    oneOff: null,
    discardedCards: null,
    playedBy: 0,
    pNum: 0,
    chosenCard: null,
    game: {
      players: [
        {
          hand: [Card.ACE_OF_SPADES],
          points: [
            Card.TEN_OF_SPADES,
            {
              ...Card.EIGHT_OF_DIAMONDS,
              attachments: [Card.JACK_OF_SPADES, Card.JACK_OF_CLUBS],
            },
          ],
          faceCards: [Card.KING_OF_SPADES],
          createdAt: '2024-07-14T12:59:45.813Z',
          updatedAt: '2024-07-14T12:59:51.528Z',
          id: 17,
          username: 'myUsername',
          pNum: 0,
          rank: 1000,
          game: 1,
          frozenId: null,
        },
        {
          hand: [Card.ACE_OF_HEARTS, Card.ACE_OF_DIAMONDS],
          points: [Card.TEN_OF_HEARTS, Card.ACE_OF_CLUBS],
          faceCards: [],
          createdAt: '2024-07-14T12:59:47.709Z',
          updatedAt: '2024-07-14T12:59:51.769Z',
          id: 18,
          username: 'definitelyNotTheGovernment6969',
          pNum: 1,
          rank: 1000,
          game: 1,
          frozenId: null,
        },
      ],
      name: 'Test Game',
      chat: [],
      status: 3,
      p0Ready: true,
      p1Ready: true,
      p0Rematch: null,
      p1Rematch: null,
      turnStalemateWasRequestedByP0: -1,
      turnStalemateWasRequestedByP1: -1,
      lock: null,
      lockedAt: null,
      rematchGame: null,
      spectatingUsers: [],
      isRanked: false,
      match: {
        endTime: null,
        games: [
          {
            chat: [],
            gameStates: [gameStateRow],
            isRanked: false,
            lock: null,
            lockedAt: null,
            match: null,
            name: 'Test Game',
            p0: gameFixture.p0.id,
            p0Ready: true,
            p0Rematch: null,
            p1: gameFixture.p1.id,
            p1Ready: true,
            p1Rematch: null,
            rematchGame: null,
            spectatingUsers: [],
            status: 3,
            turnStalemateWasRequestedByP0: -1,
            turnStalemateWasRequestedByP1: -1,
            winner: 17,
          },
        ],
        player1: gameFixture.p0.id,
        player2: gameFixture.p1.id,
        winner: null,
      },
      winner: 0,
      log: ['myUsername played the 10♠️ for points.'],
      passes: 0,
      turn: 3,
      deck: [Card.KING_OF_HEARTS],
      scrap: [Card.SIX_OF_CLUBS],
      topCard: Card.SEVEN_OF_SPADES,
      secondCard: Card.SEVEN_OF_CLUBS,
      twos: [],
      resolved: null,
      oneOffTargetType: '',
      lastEvent: {
        change: MoveType.POINTS,
        oneOff: null,
        oneOffTargetType: '',
        chosenCard: null,
        happened: true,
        pNum: 0,
        discardedCards: null,
      },
    },
    victory: {
      gameOver: true,
      winner: 0,
      conceded: false,
      currentMatch: {
        endTime: null,
        games: [
          {
            chat: [],
            gameStates: [gameStateRow],
            isRanked: false,
            lock: null,
            lockedAt: null,
            match: null,
            name: 'Test Game',
            p0: gameFixture.p0.id,
            p0Ready: true,
            p0Rematch: null,
            p1: gameFixture.p1.id,
            p1Ready: true,
            p1Rematch: null,
            rematchGame: null,
            spectatingUsers: [],
            status: 3,
            turnStalemateWasRequestedByP0: -1,
            turnStalemateWasRequestedByP1: -1,
            winner: 17,
          },
        ],
        player1: gameFixture.p0.id,
        player2: gameFixture.p1.id,
        winner: null,
      },
    },
  },
};