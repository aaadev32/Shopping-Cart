import Home from "./pages/Home"
import Shop from "./pages/Shop"

describe("Home page components", () => {
    it("home head renders head test", () => {
        const { getByRole } = render(<Home />);
        console.log(getByRole);
        expect(getByRole("div").textContent).toMatch(/home header test/i);
    });
});
