import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SistemaComponent } from './components/sistema/sistema.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { PedidoslistComponent } from './pedidos/pedidoslist/pedidoslist.component';
import { PedidosdetailsComponent } from './components/pedidos/pedidosdetails/pedidosdetails.component';
import { ProdutosdetailsComponent } from './components/produtos/produtosdetails/produtosdetails.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/layout/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PedidosComponent,
    ProdutosComponent,
    SistemaComponent,
    LoginComponent,
    PedidoslistComponent,
    PedidosdetailsComponent,
    ProdutosdetailsComponent,
    ProdutoslistComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
