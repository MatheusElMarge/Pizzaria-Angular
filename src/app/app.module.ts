import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { PedidosdetailsComponent } from './components/pedidos/pedidosdetails/pedidosdetails.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { ProdutosdetailsComponent } from './components/produtos/produtosdetails/produtosdetails.component';
import { ItenslistComponent } from './components/itens/itenslist/itenslist.component';
import { ItensdetailsComponent } from './components/itens/itensdetails/itensdetails.component';
import { SaboresdetailsComponent } from './components/sabores/saboresdetails/saboresdetails.component';
import { SaboreslistComponent } from './components/sabores/saboreslist/saboreslist.component';
import { FuncionarioslistComponent } from './components/funcionarios/funcionarioslist/funcionarioslist.component';
import { FuncionariosdetailsComponent } from './components/funcionarios/funcionariosdetails/funcionariosdetails.component';
import { ClientesdetailsComponent } from './components/clientes/clientesdetails/clientesdetails.component';
import { ClienteslistComponent } from './components/clientes/clienteslist/clienteslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    PedidoslistComponent,
    PedidosdetailsComponent,
    ProdutoslistComponent,
    ProdutosdetailsComponent,
    ItenslistComponent,
    ItensdetailsComponent,
    SaboresdetailsComponent,
    SaboreslistComponent,
    FuncionarioslistComponent,
    FuncionariosdetailsComponent,
    ClientesdetailsComponent,
    ClienteslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
