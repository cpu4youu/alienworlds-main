
declare module "@limitlesswax/alienworlds/federation" {
    export function stake(token_account: any, federation_account: any, account: any, planet_name: any, quantity: any, eos_api: any): Promise<any>;
    export function unstake(federation_account: any, token_account: any, account: any, planet_name: any, quantity: any, eos_api: any): Promise<any>;
    export function refund(federation_account: any, account: any, refund_id: any, eos_api: any): Promise<any>;
    export function getMap(federation_account: any, planet_name: any, eos_api: any): Promise<any[]>;
    export function getBalance(account: any, eos_rpc: any): Promise<string>;
    export function getStaked(federation_account: any, account: any, eos_rpc: any): Promise<{
        staked: any[];
        total: number;
    }>;
    export function getUnstakes(federation_account: any, account: any, eos_rpc: any): Promise<any>;
    export function subscribe(account: any, callback: any, ws_host?: string, ws_port?: number, test?: boolean): Promise<void>;
    export function getAssets(account: any, aa_endpoints: any, collection: any, schema?: string, tries?: number): any;
    export function agreeTerms(federation_account: any, account: any, terms_id: any, terms_hash: any, eos_api: any): Promise<any>;
    export function agreedTermsVersion(federation_account: any, account: any, eos_rpc: any): Promise<any>;
}
