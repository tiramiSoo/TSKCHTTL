import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './features/system/system.component';
import { CategoryComponent } from './features/category/category.component';
import { ReportComponent } from './features/report/report.component';
import { UsersComponent } from './features/system/users/users.component';
import { AssetComponent } from './features/asset/asset.component';
import { ReservoirComponent } from './features/asset/main-construction/reservoir/reservoir.component';
import { MainConstructionComponent } from './features/asset/main-construction/main-construction.component';
import { PumpStationComponent } from './features/asset/main-construction//pump-station/pump-station.component';
import { DrainComponent } from './features/asset/main-construction/drain/drain.component';
import { CanalsComponent } from './features/asset/main-construction/canals/canals.component';
import { SubConstructionComponent } from './features/asset/sub-construction/sub-construction.component';
import { ChangeAssetInformationComponent } from './features/asset/change-asset-information/change-asset-information.component';
import { IncreaseComponent } from './features/asset/increase/increase.component';
import { DecreaseComponent } from './features/asset/decrease/decrease.component';
import { DepreciationComponent } from './features/asset/depreciation/depreciation.component';
import { InventoryComponent } from './features/asset/inventory/inventory.component';
import { OtherComponent } from './features/asset/other/other.component';
import { ReassessComponent } from './features/asset/reassess/reassess.component';
import { AssetExploitationComponent } from './features/asset/other/asset-exploitation/asset-exploitation.component';
import { AssetMaintenancePlanComponent } from './features/asset/other/asset-maintenance-plan/asset-maintenance-plan.component';
import { AssetHandlingComponent } from './features/asset/other/asset-handling/asset-handling.component';
import { FundingSourceComponent } from './features/category/funding-source/funding-source.component';
import { DepreciationCategoryComponent } from './features/category/depreciation-category/depreciation-category.component';
import { ReportTypeComponent } from './features/category/report-type/report-type.component';
import { ListIrrigationSystemComponent } from './features/category/list-irrigation-system/list-irrigation-system.component';
import { TransferComponent } from './features/asset/transfer/transfer.component';
import { DeductDepreciationComponent } from './features/asset/deduct-depreciation/deduct-depreciation.component';


export const routes: Routes = [
  { path: '', redirectTo: '/Asset', pathMatch: 'full' },
  // Tài sản 
  { path: 'asset', component: AssetComponent},
  { path: 'asset/main-construction', component: MainConstructionComponent},
  { path: 'asset/main-construction/reservoir', component: ReservoirComponent},
  { path: 'asset/main-construction/pump-station', component: PumpStationComponent},
  { path: 'asset/main-construction/drain', component: DrainComponent},
  { path: 'asset/main-construction/canals', component: CanalsComponent},
  { path: 'asset/sub-construction', component: SubConstructionComponent},
  { path: 'asset/change-asset-information', component: ChangeAssetInformationComponent},
  { path: 'asset/deduct-depreciation', component: DeductDepreciationComponent},
  { path: 'asset/re-assess', component: ReassessComponent},
  { path: 'asset/increase', component: IncreaseComponent},
  { path: 'asset/transfer', component: TransferComponent },
  { path: 'asset/decrease', component: DecreaseComponent},
  { path: 'asset/depreciation', component: DepreciationComponent},
  { path: 'asset/inventory', component: InventoryComponent},
  { path: 'asset/other', component: OtherComponent,
    children: [
      { path: 'asset-exploitation', component: AssetExploitationComponent},
      { path: 'asset-maintenance-plan', component: AssetMaintenancePlanComponent},
      { path: 'asset-handling', component: AssetHandlingComponent},
    ]
  },
  { path: 'system', component: SystemComponent},
  { path: 'category',
    children: [
      { path: 'funding-source', component: FundingSourceComponent},
      { path: 'depreciation-category', component: DepreciationCategoryComponent},
      { path: 'report-type', component: ReportTypeComponent},
      { path: 'list-irrigation-system', component: ListIrrigationSystemComponent},
    ]
  },
  { path: 'report', component: ReportComponent},
  { path: 'system/users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }