import { isTeamType } from 'helpers/userHelper';

export const CONNECTED = 'connected';
export const NOT_CONNECTED = 'notconnected';
export const PENDING = 'pending';
export const REJECTED = 'rejected';

export function isConnected(status) {
    return status === CONNECTED;
}

export function isNotConnected(status) {
    return status === NOT_CONNECTED;
}

export function isPending(status) {
    return status === PENDING;
}

export function isRejected(status) {
    return status === REJECTED;
}

export function mapUserOrTeam(userOrTeam) {
    return {
        ...userOrTeam,
        isTeam: isTeamType(userOrTeam.type),
    };
}

export const TEAMMATE_DEGREE = 1;

export function isTeammate(connection = {}) {
    return connection.degree === TEAMMATE_DEGREE;
}

export const OPPONENT_DEGREE = 2;

export function isOpponent(connection = {}) {
    return connection.degree === OPPONENT_DEGREE;
}

export function isTeammateOrOpponent(connection = {}) {
    return isTeammate(connection) || isOpponent(connection);
}
