export interface DanhMuc {
    dm_id?: number;
    dm_ten?: string;
    dm_ldm_id?: number; 
    dm_ma?: string;
    dm_pid?: number;
    dm_uuid?: string;
    dm_stt?: number;
    dm_mota?: string;
}

export interface KhauHao {
    id?: number;
    tencongtrinh?: string;
    thoihansudung?: number; 
    tylehaomon?: number;
    id_loaicongtrinh?: number;
    dm_ten?: string;
}