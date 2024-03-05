import type { BaseVectorDB } from '../vectordb/BaseVectorDb';
import type { QnaPair } from './QnAPair';

export type RemoteInput = string;

export type LocalInput = QnaPair;

export type Input = RemoteInput | LocalInput;

export interface EmbedChainAppConfig {
  db?: BaseVectorDB;
  collectMetrics?: boolean;
}
