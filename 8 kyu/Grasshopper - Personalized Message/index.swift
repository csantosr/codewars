func great(_ name: String, _ owner: String) -> String {
  return "Hello \(name == owner ? "boss" : "guest")"
}