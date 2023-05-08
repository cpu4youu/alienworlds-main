declare module "aw-mine/mine" {
    export function setPlayerData(federation_account: any, account: any, eos_api: any, tag?: string, avatar_id?: number, permission?: string): Promise<any>;
    export function setTagData(federation_account: any, account: any, eos_api: any, tag: any, permission?: string): Promise<any>;
    export function getBag(mining_account: any, account: any, eos_rpc: any, aa_api: any): Promise<any>;
    export function setBag(mining_account: any, account: any, items: any, eos_api: any, permission?: string): Promise<any>;
    export function getLand(federation_account: any, mining_account: any, account: any, eos_rpc: any, aa_api: any): Promise<any>;
    export function getLandById(federation_account: any, land_id: any, eos_rpc: any, aa_api: any): Promise<any>;
    export function setLand(mining_account: any, account: any, land_id: any, eos_api: any, permission?: string): Promise<any>;
    export function getPlanets(federation_account: any, mining_account: any, eos_rpc: any): Promise<any[]>;
    export function getLandByPlanet(planet_name: any, atomic_endpoint: any, collection: any, schema?: string): Promise<any>;
    export function getPlayerData(federation_account: any, account: any, eos_rpc: any, aa_api: any): Promise<{
        tag: string;
        avatar: string;
    }>;
    export function getLandMiningParams(land: any): {
        delay: number;
        difficulty: number;
        ease: number;
    };
    export function getBagMiningParams(bag: any): {
        delay: number;
        difficulty: number;
        ease: number;
    };
    export function getNextMineDelay(mining_account: any, account: any, params: any, eos_rpc: any): Promise<number>;
    export function lastMineTx(mining_account: any, account: any, eos_rpc: any): Promise<string>;
    export function doWork({ mining_account, account, difficulty, last_mine_tx }: {
        mining_account: any;
        account: any;
        difficulty: any;
        last_mine_tx: any;
    }): Promise<{
        account: any;
        rand_str: any;
        hex_digest: any;
    } | undefined>;
    export function doWorkWorker(mining_params: any): Promise<any>;
    export function processRandomQueue(mining_account: any, eos_api: any, permission?: string): Promise<any>;
    export function setLandCommission(federation_account: any, owner: any, land_id: any, profit_share: any, eos_api: any, permission?: string): Promise<any>;
    export function claim(mining_account: any, account: any, account_permission: any, mine_data: any, hyperion_endpoints: any, eos_api: any): any;
    export function getBountyFromTx(transaction_id: any, miner: any, hyperion_endpoints: any): Promise<any>;

}
