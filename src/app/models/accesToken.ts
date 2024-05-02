export interface AccessToken {
  acessT: string;
  expiration: number;
  refreshExpire: number;
  refreshToken: string;
  tokenType: number;
  notBeforePolicy: number;
  sessionState: string;
  scope: string;
}
