class Inventory {
  ledger = { total: 1200 }
}

class ItemsComponent {
  ledger: any
  constructor(private inventory: Inventory) {
    this.ledger = inventory.ledger;
  }
  add(x) { this.ledger.total += x; }
}

class WidgetsComponent {
  ledger: any
  constructor(private inventory: Inventory) {
    this.ledger = inventory.ledger;
  }
  add(x) { this.ledger.total += x; }
}