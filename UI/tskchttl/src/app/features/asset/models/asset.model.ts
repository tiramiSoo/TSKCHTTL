export interface Asset {
    id?: number;
    tenTaiSan?: string;
    loaiTaiSan?: string; 
    slTaiSan?: number;
    nstw?: number;
    nst?: number;
    nsh?: number;
    nsx?: number;
    nvt?: number;
    lePhi?: number;
    nk?: number;
    giaQuyUoc?: number;
    html?: number;
    ngayGhiTang?: Date;
    ngayBatDau?: Date;
    namTheoDoi?: number;
    trangThai?: string;
    tyLeHaoMon?: number;
    boPhanSuDung?: string;
    tS_LoaiCongTrinh?: string;
    tS_CongTrinh?: string;
    tS_CapCongTrinh?: string;
    tS_HTTN?: string;
    tS_MDK?: number;
    tS_Tinh?: string;
    tS_Huyen?: string;
    tS_Xa?: string;
    tS_BBBGTN?: string;
    tS_NamXayDung?: string;
    tS_NamBanGiao?: string;
    tS_NamKhaiThac?: string;
    tS_DVT?: string;
    tS_NgayKhaiThac?: Date;
    tS_NBDSD?: Date;
    tS_SNSD?: number;
    tS_HMN?: string;
    maTaiSan?: string;
    nguyenGia?: number;
    giaTriConLai?: number;
    dVQuanLy?: string;
    tS_DTD?: string;
    tS_DTS?: string;
    page: number;
    numberInPage: number;
}