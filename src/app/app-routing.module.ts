import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { ItenslistComponent } from './components/itens/itenslist/itenslist.component';
import { SaboreslistComponent } from './components/sabores/saboreslist/saboreslist.component';
import { PedidosdetailsComponent } from './components/pedidos/pedidosdetails/pedidosdetails.component';
import { FuncionarioslistComponent } from './components/funcionarios/funcionarioslist/funcionarioslist.component';
import { ClienteslistComponent } from './components/clientes/clienteslist/clienteslist.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { rotaguardGuard } from './guards/rotaguard.guard';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "admin", component: IndexComponent, canActivate: [rotaguardGuard], children: [
      { path: "produtos", component: ProdutoslistComponent },
      { path: "pedidos", component: PedidoslistComponent },
      { path: "pedidos-details", component: PedidosdetailsComponent },
      { path: "itens", component: ItenslistComponent },
      { path: "sabores", component: SaboreslistComponent },
      { path: "funcionarios", component: FuncionarioslistComponent},
      { path: "clientes", component: ClienteslistComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
