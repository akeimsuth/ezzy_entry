import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in', 
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'select-society',
    loadChildren: () => import('./select-society/select-society.module').then( m => m.SelectSocietyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'allow-guest',
    loadChildren: () => import('./allow-guest/allow-guest.module').then( m => m.AllowGuestPageModule)
  },
  {
    path: 'allow-cab',
    loadChildren: () => import('./allow-cab/allow-cab.module').then( m => m.AllowCabPageModule)
  },
  {
    path: 'allow-deliveryman',
    loadChildren: () => import('./allow-deliveryman/allow-deliveryman.module').then( m => m.AllowDeliverymanPageModule)
  },
  {
    path: 'allow-serviceman',
    loadChildren: () => import('./allow-serviceman/allow-serviceman.module').then( m => m.AllowServicemanPageModule)
  },
  {
    path: 'gate-pass',
    loadChildren: () => import('./gate-pass/gate-pass.module').then( m => m.GatePassPageModule)
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./helpdesk/helpdesk.module').then( m => m.HelpdeskPageModule)
  },
  {
    path: 'raise-complaint',
    loadChildren: () => import('./raise-complaint/raise-complaint.module').then( m => m.RaiseComplaintPageModule)
  },
  {
    path: 'complaint-info',
    loadChildren: () => import('./complaint-info/complaint-info.module').then( m => m.ComplaintInfoPageModule)
  },
  {
    path: 'notices-board',
    loadChildren: () => import('./notices-board/notices-board.module').then( m => m.NoticesBoardPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./payment-methods/payment-methods.module').then( m => m.PaymentMethodsPageModule)
  },
  {
    path: 'payment-receipt',
    loadChildren: () => import('./payment-receipt/payment-receipt.module').then( m => m.PaymentReceiptPageModule)
  },
  {
    path: 'booked-amenities',
    loadChildren: () => import('./booked-amenities/booked-amenities.module').then( m => m.BookedAmenitiesPageModule)
  },
  {
    path: 'select-amenity',
    loadChildren: () => import('./select-amenity/select-amenity.module').then( m => m.SelectAmenityPageModule)
  },
  {
    path: 'book-amenity',
    loadChildren: () => import('./book-amenity/book-amenity.module').then( m => m.BookAmenityPageModule)
  },
  {
    path: 'amenity-payment-method',
    loadChildren: () => import('./amenity-payment-method/amenity-payment-method.module').then( m => m.AmenityPaymentMethodPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'creat-post',
    loadChildren: () => import('./creat-post/creat-post.module').then( m => m.CreatPostPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'book-service',
    loadChildren: () => import('./book-service/book-service.module').then( m => m.BookServicePageModule)
  },
  {
    path: 'add-family-member',
    loadChildren: () => import('./add-family-member/add-family-member.module').then( m => m.AddFamilyMemberPageModule)
  },
  {
    path: 'add-daily-helps',
    loadChildren: () => import('./add-daily-helps/add-daily-helps.module').then( m => m.AddDailyHelpsPageModule)
  },
  {
    path: 'add-my-vehicle',
    loadChildren: () => import('./add-my-vehicle/add-my-vehicle.module').then( m => m.AddMyVehiclePageModule)
  },
  {
    path: 'add-frequest-entries',
    loadChildren: () => import('./add-frequest-entries/add-frequest-entries.module').then( m => m.AddFrequestEntriesPageModule)
  },
  {
    path: 'family-gate-pass',
    loadChildren: () => import('./family-gate-pass/family-gate-pass.module').then( m => m.FamilyGatePassPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'get-support',
    loadChildren: () => import('./get-support/get-support.module').then( m => m.GetSupportPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'society-payments',
    loadChildren: () => import('./society-payments/society-payments.module').then( m => m.SocietyPaymentsPageModule)
  },
  {
    path: 'entry-call',
    loadChildren: () => import('./entry-call/entry-call.module').then( m => m.EntryCallPageModule)
  },
  {
    path: 'family-gate-pass',
    loadChildren: () => import('./family-gate-pass/family-gate-pass.module').then( m => m.FamilyGatePassPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
