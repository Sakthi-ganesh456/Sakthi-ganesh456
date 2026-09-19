# Data model

`users` is the authentication authority, with role values enforcing consumer, seller/farmer, investor, and administrator access. `farmer_profiles` and `seller_profiles` extend it 1:1.

## Commerce

A `products` row belongs to a seller and carries English/Tamil names. Its one-to-one `inventory` row represents available quantity. An active `baskets` row has `basket_items`; checkout snapshots this into `orders` and `order_items`. Per-item fulfilment enables sellers to pack and ship independently, while the order tracks the customer-visible status.

## Farm investment

A farmer owns an `investment_campaigns` record, including bilingual content, funding target/date window, and final harvest outcome. `investments` records each investor contribution and payment state. `profit_distributions` links each payout to its campaign and investment, preserving a transparent payout history.

## Accountability

`transactions` records money-related references across orders, investments, and distributions. `audit_logs` captures the actor, action, target entity, timestamp, and JSON metadata. Foreign keys protect all principal relationships; indexes support category searches and audit/transaction lookup by entity.
